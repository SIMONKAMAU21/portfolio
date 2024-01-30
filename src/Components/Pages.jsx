import './Pages.scss';
import Short from '../Components/Short';

const Pages = ()=>{
   return(
      <div className="pages">
         <div className="conc">
            <h5>YOUR PAGES</h5>
            <a href="http://">see all</a>
         </div>
         <div className="pages-body">
            <Short/>
         </div>
      </div>
   )
}
export default Pages;