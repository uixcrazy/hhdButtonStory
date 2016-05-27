# hhdButtonStory - made by [uixcrazy](http://uixcrazy.com/) 
keyworkS: storybook, reactjs, scss, babel, webpack
storybook: https://github.com/kadirahq/react-storybook

STEP BY STEP


### STEP 01: Mọi thứ bắt đầu từ file __package.json__
-------------------------------------------------------------------------
1. config file package.json  
  eg: _script "storybook": "start-storybook -p 9080"_
  
  Nếu bạn thay thế thư mục __.storybook__ bằng __hhdstory__ thì viết:
  eg: _script "storybook": "start-storybook -p 9080 -c _hhdstory"_
Giải thích: -c sẽ trỏ vào component cha
  
2. `npm i`

3. tạo *folder _hhdstory* (đây là là root component)  -> file config.js

4. `npm run storybook`



