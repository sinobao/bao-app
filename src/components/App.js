import React from 'react';

function App() {
  const [data, setData] = React.useState(null);

  const fetchingData = () => {
    const axios = require('axios');
    const url = 'http://tieba.baidu.com/hottopic/browse/topicList';

    axios
      .get(url, {
        headers: {},
      })
      .then((response) => response.data.data.bang_topic.topic_list)
      .then((topics) => setData(topics));
  };

  React.useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      {console.log(data)}
      <ul>
        {data === null
          ? ''
          : data.map((i) => <li key={i.topic_id}>{i.topic_name}</li>)}
      </ul>
    </div>
  );
}

export default App;
