 export default function Footer() {
	return(

     <div>
         
         {/*Footer Section Start*/}
         <div className = "social-icons">

         <a href = "https://www.linkedin.com/in/aliza-ghaffar-1487362bb/" target ="blank">
           <img 
             src = "images/social_icon_01.png"
             alt = "linkedin_icon"
           />
        </a>

         <a  href="https://github.com/AlizaGhaffar" target="blank">
           <img 
             src = "images/social_icon_02.png"
             alt = "github_icon"
           />
         </a>

         </div>


         <p className = "footer_p">© 2024 Aliza Ghaffar. All rights reserved.
         </p>
	     {/*Footer Section End*/}



     </div>


	)
}