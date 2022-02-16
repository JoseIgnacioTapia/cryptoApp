import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            span={12}
            title="Total Cryptocurrencies"
            value="5"
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic span={12} title="Total Exchanges" value="5"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic span={12} title="Total Market Cap" value="5"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic span={12} title="Total 24h Volume" value="5"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic span={12} title="Total Markets" value="5"></Statistic>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
