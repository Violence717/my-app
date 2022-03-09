import React, { useState } from 'react'

import List from './List'
import Input from './Input'

import Image from 'next/image'

import styles from '../styles/Item.module.css'

import plus from '../images/plus.svg'
import minus from '../images/minus.svg'

const Item = ({ index, title, body, list }) => {
    const [visible, setVisible] = useState(false)
    const [mark, setMark] = useState(plus)

    return (
        <li className={styles.item}>
            <div className="">
                <div className={styles.content}>
                    <h2 className={styles.heading}>{index}. {title}</h2>
                    <p>{body}</p>
                </div>
                <div className={styles.options}>
                    <Input />
                    <Image
                        onClick={() => {
                            visible === true ? setVisible(false) : setVisible(true)
                            mark === plus ? setMark(minus) : setMark(plus)
                        }}
                        className={styles.mark}
                        src={mark}
                        alt="show list"
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