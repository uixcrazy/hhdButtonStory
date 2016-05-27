# hhdButtonStory - made by [uixcrazy](http://uixcrazy.com/) 
keyworkS: storybook, reactjs, scss, babel, webpack
storybook: [storybook](https://github.com/kadirahq/react-storybook)

STEP BY STEP


### STEP 01: Mọi thứ bắt đầu từ file __package.json__
-------------------------------------------------------------------------
1. config file package.json  
  eg: _script "storybook": "start-storybook -p 9080"_
  
  Nếu bạn thay thế thư mục __.storybook__ bằng __hhdstory__ thì viết:
  eg: _script "storybook": "start-storybook -p 9080 -c _hhdstory"_

Giải thích: _-c_ sẽ trỏ vào component cha
  
2. `npm i`

3. tạo *folder _hhdstory* (đây là là root component)  -> file config.js

4. `npm run storybook`

### STEP 02: import CSS
-------------------------------------------------------------------------

-- Bạn không thể gọi file CSS (như kiểu thông thường với HTML)
-- Docs: [sass-loader](https://github.com/jtangelder/sass-loader)
			 [tham khảo](http://stackoverflow.com/questions/16073603/how-do-i-update-each-dependency-in-package-json-to-the-latest-v)ersion

sẽ cài webpack:
`npm install --save-dev sass-loader node-sass webpack`

viết file .scss

