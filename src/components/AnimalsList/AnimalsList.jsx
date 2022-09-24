import { Row, Col } from 'antd'
import AnimalCard from '../AnimalCard/AnimalCard'

function AnimalsList({ animals, onDeleteAnimal }) {
  return (
    <Row>
      {animals.map(animal => (
        <Col span={8} key={animal.id}>
          <AnimalCard
            onDelete={() => onDeleteAnimal(animal.id)} {...animal}
          />
        </Col>
      ))}
    </Row>
  )
}

export default AnimalsList