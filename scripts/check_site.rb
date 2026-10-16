# Checks the built site in _site: every internal link and image resolves,
# no placeholder "#" links, and every image has an alt attribute.
# Usage: ruby scripts/check_site.rb [site_dir]
site = File.expand_path(ARGV[0] || "_site")
abort "No built site at #{site}; run `bundle exec jekyll build` first." unless Dir.exist?(site)

def target_exists?(site, path)
  path = path.split(/[?#]/).first.to_s
  return true if path.empty?
  file = File.join(site, path)
  File.file?(file) || File.file?(File.join(file, "index.html")) || File.file?("#{file}.html")
end

errors = []
pages = Dir.glob(File.join(site, "**", "*.html"))
pages.each do |page|
  html = File.read(page)
  rel = page.delete_prefix("#{site}/")
  html.scan(/\b(?:href|src)="([^"]*)"/i).flatten.each do |url|
    if url == "#" || url.empty?
      errors << "#{rel}: placeholder link #{url.inspect}"
    elsif url.start_with?("/") && !url.start_with?("//")
      errors << "#{rel}: broken internal link #{url}" unless target_exists?(site, url)
    elsif url.start_with?("#")
      id = url[1..]
      errors << "#{rel}: missing anchor #{url}" unless html.match?(/\bid="#{Regexp.escape(id)}"/)
    end
  end
  html.scan(/<img\b[^>]*>/i).each do |img|
    errors << "#{rel}: image without alt: #{img[0, 120]}" unless img.match?(/\balt=/i)
  end
end

if errors.empty?
  puts "Checked #{pages.size} pages: all links and images OK."
else
  puts errors.uniq
  abort "#{errors.uniq.size} problem(s) found."
end
