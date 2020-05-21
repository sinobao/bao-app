const fetchingData = () => {
  const axios = require('axios');
  const url = 'http://tieba.baidu.com/hottopic/browse/topicList';
  axios.get(url).then((response) => {
    response.data.data.bang_topic.json();
  });
};
