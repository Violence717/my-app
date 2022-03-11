import React from 'react'

import List from './List'

import styles from '../styles/Main.module.css'

const Main = ({ data }) => {
    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>the world in the XIX century</h1>
            <List items={data} />
        </main>
    )
}

export default Main
