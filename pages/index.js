import Head from 'next/head'

import Main from '../components/Main'
import Footer from '../components/Footer'

import styles from '../styles/Home.module.css'

const Home = () => {
    const data = [
        {
            index: 0,
            title: 'Europe',
            body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            isChecked: false,
            list: [
                {
                    index: 0,
                    title: 'German Empire',
                    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    isChecked: false,
                    list: [
                        {
                            index: 0,
                            title: 'Prussia',
                            body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                            isChecked: false,
                            list: []
                        }
                    ]
                },
                {
                    index: 1,
                    title: 'Russian Empire',
                    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    isChecked: false,
                    list: [
                        {
                            index: 0,
                            title: 'Finland',
                            body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                            isChecked: false,
                            list: []
                        }
                    ]
                }
            ]
        },
        {
            index: 1,
            title: 'Asia',
            body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            isChecked: false,
            list: [
                {
                    index: 0,
                    title: 'Qing dynasty',
                    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    isChecked: false,
                    list: []
                },
                {
                    index: 1,
                    title: 'Empire of Japan',
                    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    isChecked: false,
                    list: []
                }
            ]
        }
    ]

    return (
        <div className={styles.container}>
            <Head>
                <title>XIX</title>
                <meta name="description" content="It's multilevel list." />
            </Head>
            <Main data={data}/>
            <Footer />
        </div>
    )
}

export default Home
