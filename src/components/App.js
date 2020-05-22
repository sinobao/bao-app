import React from 'react';
import { fetchBaiduHot } from './apiCore';
import NewsCard from './newsCard';
import Grid from '@material-ui/core/Grid';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchBaiduHot().then((baiduHot) =>
      setData(baiduHot.data.bang_topic.topic_list)
    );
  }, []);

  return (
    <div>
      <Grid container direction='row' justify='space-evenly'>
        {/* <NewsCard /> */}
        {data === null
          ? ''
          : data.map((i) => (
              <NewsCard
                key={i.topic_id}
                title={i.topic_name}
                description={i.topic_desc}
              />
            ))}
      </Grid>
    </div>
  );
}

export default App;
