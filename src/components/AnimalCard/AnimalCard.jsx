import { Card, Avatar } from 'antd'
import { DeleteFilled } from '@ant-design/icons'; // iconos de ant design -> ver en https://ant.design/components/icon


const { Meta } = Card;


function AnimalCard({ specie, name, img, onDelete }) {
  return (
    <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={img}
        // style={{maxHeight: '200px'}}
      />
    }
    actions={[
      <DeleteFilled onClick={onDelete} />
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={name}
      description={specie}
    />
  </Card>
  )
}

export default AnimalCard