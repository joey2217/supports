import type { NextPage } from 'next'
import Head from 'next/head'
import { Row, Col, Card, Popover, Image } from 'antd'
import { CopyOutlined, QrcodeOutlined } from '@ant-design/icons'
import { aliyunSupports } from '../data/data'
import { copyText } from '../utils'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Supports-阿里云开发者推广</title>
      </Head>
      <a
        className="text-lg"
        target="_blank"
        rel="noopener noreferrer"
        href="https://promotion.aliyun.com/ntms/act/ambassador/sharetouser.html?userCode=6wzzmpsm&utm_source=6wzzmpsm"
      >
        阿里云 • 云小站
      </a>
      <div
        className="h-32"
        style={{
          background:
            'url(https://img.alicdn.com/imgextra/i2/O1CN01uS91Cg1EqcLcD7JEV_!!6000000000403-2-tps-2880-480.png) center center / cover no-repeat',
        }}
      ></div>
      <Row gutter={[10, 10]} className="mt-4">
        {aliyunSupports.map((s) => (
          <Col key={s.title} xs={24} sm={12} md={8}>
            <Card
              actions={[
                <CopyOutlined
                  key="copy-link"
                  title="复制链接"
                  onClick={() => copyText(s.url)}
                />,
                <Popover
                  key="qrcode"
                  content={
                    <Image src={s.qrCodeUrl} alt="qrcode" preview={false} />
                  }
                >
                  <QrcodeOutlined title="二维码" />
                </Popover>,
              ]}
            >
              <Card.Meta
                title={
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.title}
                  </a>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
