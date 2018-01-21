require 'nokogiri'
require 'httparty'
require 'json'

page = HTTParty.get("https://www.relax.by/cat/ent/cafe/minsk/fast-food/")

parse_page = Nokogiri::HTML(page)

new_parse = parse_page.css('.Place__header').map do |cafe|
    header = cafe.css('.Place__headerLink').first
    
    link = header.attributes["href"].value
    name = header.attributes["title"].value

    place = cafe.css('.Place__addressText').first.text

    {link: link, name: name, place: place}
end

open('fastfood.json', 'w') { |f| f << new_parse.to_json }
