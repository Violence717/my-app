import React, { useState } from 'react'

import List from './List'
import Checkbox from './Checkbox'
import Button from './Button'

import styles from '../styles/Item.module.css'

const Item = ({ index, title, body, list, checked }) => {

    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState(checked)

    return (
        <li className={styles.item}>
            <div>
                <div className={styles.content}>
                    <h2 className={styles.heading}>{index}. {title}</h2>
                    <p>{body}</p>
                </div>
                <div className={styles.options}>
                    <Checkbox
                        checked={value}
                        changeAction={(event) => {
                            list.map(item => {
                                item.checked = event.target.checked
                                console.log(item)
                            })
                            setValue(event.target.checked)
                        }}
                    />
                    <Button
                        clickAction={(event) => {
                            visible === true
                                ? setVisible(false)
                                : setVisible(true)
                            event.target.childNodes[0].nodeName === '#text'
                                ? event.target.classList.toggle(styles.position)
                                : event.target.childNodes[0].classList.toggle(styles.position)
                        }}
                        content="⯆"
                    />
                </div>
            </div>
            {
                visible ? <List items={list} /> : false
            }
        </li>
    )

}

export default Item