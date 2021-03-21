import React from 'react'
import styles from '../styles/Home.module.css'
import {Row,Col,Image} from 'antd' 

const mainPage = () => {
    return (
        <div className={styles.mainpage}>
          <Row>
              <Col className={styles.intro}>
              <p>Only one ounce of saffron spice needs a lot of efforts, tough labor and picking more than 7,000 purple saffron flowers. <br/> The flower’s red antenna or sargol saffron must be  picked by hands individually and then dried in  best conditions.<br/> These procedures make saffron rare and make its mass production limited. Fortunately, only small amounts of saffron spice are required in cooking.<br/> It is also the most expensive spice in the world, weight for weight being worth more than gold and using it in any food make it a luxurious dish.</p>
              </Col>
          </Row>     
          <Row >
              <Col span={12}>
              <Image src='/marlik-saffron-_Nrw_Pa3rhM-unsplash (copy).jpg' width={600} height={600} preview={false} />
              </Col>
              <Col span={12} >
              <div className={styles.benifits}>
             <h1>BENEFIT OF SAFFRON SPICE</h1>
             <ul>
             
             <li>Saffron Spice increases the Serotonin Levels in the Brain that is Responsible for Maintaining a Good Mood.</li>
        <li>Saffron is Also the Best Appetite Suppressant, and Control Food Craving.</li>
        <li>In Addition, Saffron is Good for Weight Loosening.</li>
        <li>Many Researchers Claimed that Saffron is a Good Sexual Drive Stimulator.</li>
        <li>Also, Saffron Claimed to be an effective natural Anti-Depressant.</li>
        <li>Furthermore, Saffron Claimed to have potential as an Anti-Cancer and natural pain reliever.</li>
        <li>A Cup of Saffron Tea is Good for Attention, Sleep and Memory.</li>
        <li>Most of All, Saffron is Rich of Antioxidants, Vitamin B2 and Riboflavin.</li>
                      </ul>
              </div>
              </Col>
          </Row>
          <Row>
          <Col span={12}> 
             <div className={styles.benifits}>
             <h1>
          HOW TO USE?
             </h1>
             <ul>
             
             <li>Saffron is a very delicious spice which is used in many cuisines. It adds a different distinct sweet flavor and a bright yellow color to dishes and drinks</li>
        <li>In order to consume saffron the best way, you should crush and soak the saffron threads in hot water for about 15 minutes, and then add the water to your recipe. It needs moisture to re-hydrate, release its full flavor vibrant color.</li>
        <li>For instant way of consuming saffron spices,  just add 5 tbsps of liquid for each tbsps of saffron; let it soak for at least 20 minutes. Using a spoon, mash the saffron threads to form a thick paste. When required, you can add the paste to the food or dish.</li>
        
                      </ul>
                      </div>

            
              </Col>  
             <Col span={12}>
             <Image src='/safronuse (copy).jpg' width={600} height={600} preview={false} />
             </Col>
             
            
              
          </Row>
     
        </div>
    )
}

export default mainPage
