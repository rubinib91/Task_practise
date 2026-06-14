import Employee from './Components/Employee'
import Findbyid from './Components/Findbyid'
import Findcarttotal from './Components/Findcarttotal'
import Findcompleteorders from './Components/Findcompleteorders'
import Products from './Components/Products'
import Studentmanagementsystem from './Components/Studentmanagementsystem'

const App = () => {
  return (
    <>
    <div>
      <Employee/>
      <Findbyid/>
      <Products/>
      <Findcarttotal/>
      <Findcompleteorders/>
      <Studentmanagementsystem/>
    </div>
    </>
  )
}

export default App
