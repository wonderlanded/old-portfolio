import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'

const Introduce = () => {
    return(
    <section id='introduce'>
        <Heading
            fontSize={[5,6,7]}
            color='primary'>
                <FormattedMessage id="introduce" />
        </Heading>
        <Subhead mt={2} fontSize={[1, 2]}>
            <FormattedMessage id="introduceDesc" /><br/>
            <FormattedMessage id="specific" /> <a href='#ability'><FormattedMessage id="here" /></a><FormattedMessage id="specific2" />
        </Subhead>
        <br/>

        {/*취미*/}

        <Heading
            fontSize={[4,5,6]}
            color='primary'>
                <FormattedMessage id="hobby" />
        </Heading>
        <br/>
        <div className='ui stackable grid'>
            <div className='five wide column'>
            <Heading
            fontSize={[3,4,5]}
            color='primary'>
                <i className='icon game'/> <FormattedMessage id="game" />
        </Heading>
                <p><FormattedMessage id="gameDesc" /></p>
            </div>
            <div className='five wide column'>
            <Heading
            fontSize={[3,4,5]}
            color='primary'>
                <i className='icon video'/> <FormattedMessage id="movie" />
        </Heading>
                <p><FormattedMessage id="movieDesc" /></p>
            </div>
            <div className='five wide column'>
            <Heading
            fontSize={[3,4,5]}
            color='primary'>
                <i className='icon music'/> <FormattedMessage id="music" />
        </Heading>
                <p><FormattedMessage id="musicDesc" /></p>
            </div>
        </div>
        <br/>

        {/*기타*/}

        <Heading
            fontSize={[4,5,6]}
            color='primary'>
                <FormattedMessage id="other" />
        </Heading>
        <br/>
        <div className='ui stackable grid'>
            <div className='five wide column'>
            <Heading
            fontSize={[3,4,5]}
            color='primary'>
                <i className='icon apple'/> <FormattedMessage id="apple" />
        </Heading>
                <p><FormattedMessage id="appleDesc" /></p>
            </div>
            <br/>

            <div className='five wide column'>
            <Heading
            fontSize={[3,4,5]}
            color='primary'>
                <i className='icon python'/> <FormattedMessage id="python" />
        </Heading>
                <p><FormattedMessage id="pythonDesc" /></p>
            </div>
            <div className='five wide column'>
            <Heading
            fontSize={[3,4,5]}
            color='primary'>
                <i className='icon text cursor'/> <FormattedMessage id="editor" />
        </Heading>
                <p><FormattedMessage id="editorDesc" /></p>
            </div>
        </div>
    </section>
    )
}

export default Introduce
