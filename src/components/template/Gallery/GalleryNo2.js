import React from 'react';
import '../tamplateCSS/set1.css'

class GalleryNo2 extends React.Component {
    constructor(props){  
      super(props);
          this.state = {
          };   
      }
  render() {
    return (
				<div class="grid">
        					<figure class="effect-sadie">
						<img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjF84jnlPffAhUCTI8KHduvBCkQjRx6BAgBEAU&url=http%3A%2F%2Fwyborcza.biz%2FGieldy%2F1%2C114507%2C20197503%2Cofe-zrepolonizuja-banki-moga-dostac-propozycje-nie-do-odrzucenia.html&psig=AOvVaw29UVDMK3z05KTW0xYQWsEE&ust=1547895115583911 " alt="img12"/>
						<figcaption>
							<div>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure class="effect-lily">
						<img src="img/1.jpg" alt="img1"/>
						<figcaption>
							<div>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure class="effect-lily">
						<img src="img/12.jpg" alt="img12"/>
						<figcaption>
							<div>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure class="effect-lily">
						<img src="img/1.jpg" alt="img1"/>
						<figcaption>
							<div>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
    );
  }
}

export default GalleryNo2;
