import Format from '../layout/format'
import New from '../components/new'
import Favorites from '../components/favorites'

export default function Home() {
  return (
    <Format>
      <New />
      <Favorites />
    </Format>
  )
}