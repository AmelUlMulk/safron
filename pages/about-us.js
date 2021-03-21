import React from 'react'
import {Row,Col} from 'antd'
import styles from '../styles/Home.module.css'
const about = () => {
    return (
        <Row className={styles.aboutbg}>
            <Col span={24}>
            <div className={styles.aboutintro}>
            <h2>About US</h2>
             <p>
                 adjalk dasjakd djaskld djaskldj dsjkladj daslkdjaslkdja dsajkldjas
             </p>

            </div>
           </Col>
            
            <Col span={24}>
            <Row>
                
                <Col span={12} className={styles.middle}>
                <h2>Where Are we Located</h2>
                <p>Jkldasj dajlskd jdalksjdlaks jldaksj adhsjklah dajkls</p>
                </Col>
                <Col span={12} className={styles.middle}>
                
                <h2>
                    What we aim for
                </h2>
                <p>
                    loadlkasj djaslkdjas jdaskljda jdaksjdlas jdaskl jdasklj
                </p>
                </Col>
            </Row>
            </Col>
        </Row>
    )
}

export default about
