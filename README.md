### Installation

1. Install node/npm if you haven't already : 
    * sudo apt-get install nodejs
    * sudo apt-get install nodejs-legacy
    * sudo apt-get install npm

2. Install bower if you haven't already: sudo npm install -g bower

3. Install ruby and compass if you haven't already:
    * sudo apt-get install ruby
    * sudo apt-get install ruby-dev
    * sudo gem install compass

4. Install grunt-cli if you haven't already : sudo npm install -g grunt-cli

5. In your project's folder : npm install

6. In your project's folder : bower install

To start your project , go to your project's folder and run ```grunt serve```


#### Updating fork

1. Link your repository to upstream : ```git remote add upstream https://github.com/kezek/whosfilming-frontend.git```

2. Grab changes from upstream :```git fetch upstream```

3. Rebase your master : ```git rebase upstream/master```

4. Push changes : ```git push origin master```

