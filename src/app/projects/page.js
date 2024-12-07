export default function Projects() {
	return (

     <div>
        
          {/*Project Section Start */}
          <h1 className="project_h1">Projects</h1>


          {/*Project Section_01 */}
          <div className = "project-container_01">
          <div className = "project_items_01">
             <img
              src = "images/burger.jpg"
              alt = "project_img"
              />
             <h2><a href="https://nextjswebsite1.vercel.app/" target="blank">Burgeria</a></h2>      
          </div>



          <div className = "project_items_01">
            <img 
              src = "images/rivo.jpg"
              alt = "project_img"
              />
            <h2><a href="https://nextjsweb2.vercel.app/" target="blank">Ecommerce website</a></h2>
            </div>
          </div>


            

          {/*Project Section_02 */}
          <div className = "project-container_02">
          <div className = "project_items_02">
            <img 
              src = "images/port.jpg"
              alt = "project_img"
            />
            <h2><a href="https://personal-portfolio-sigma-mauve.vercel.app/" target="blank">personal portfolio</a></h2>
          </div>

          <div className = "project_items_02">
            <img 
              src = "images/res.jpg"
              alt = "project_img"
            />
            <h2><a href="https://hackathon-resume-builder-qes9.vercel.app/" target="blank">Resume Builder</a></h2>
          </div>
          </div>

          {/*Project Section End */}
        







     </div>

  );
}