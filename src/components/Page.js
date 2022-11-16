import Cards from "./Cards";
import Footer from "./Footer";
export default function Page() {
    return(
        <div>
            <div className='top-padding'>
                <div className='pfp-flex'>
                    <div className='md:w-1/2 w-screen text-margin'>
                        <text className='name'>Heyhow,</text>
                        <p className='sub-text'>
                            <br/><br/>
                            <bold className='hight-light-text-gry'>!</bold>Please read our <a className='saho' href='https://github.com/Luna-devv/Modern-Website/blob/main/LICENSE'>LICENSE</a> before you start editing! <br></br>
                            <bold className='hight-light-text-gry'>!</bold>You must leave my '<text className='hight-light-text-gry'>©️ Template made by <a className='saho' href='https://lunish.nl/luna'>Luna</a></text>' watermark in the footer! <br></br>
                            <bold className='hight-light-text-gry'>!</bold>If you need help join our <a className='saho' href='https://lunish.nl/discord'>support</a> server. <br></br>
                        </p>
                    </div>
                    <div className='pfp'>
                        <img src='https://us-east-1.tixte.net/uploads/cdn.xyna.space/r/ktbuzp5td9a.png'
                             alt='lunas profile pic' className='spicutes' />
                    </div>
                </div>
            </div>
                <div className="list">
                     <Cards link="twitter.com/luni_sia" cardimg="https://us-east-1.tixte.net/uploads/cdn.xyna.space/r/ksl3cpf9m9a.png" cardimgalt="Twitter" cardtext=" This is my relatively inactive and weird Twitter account where I'm always posting some kind of damage." headline="Twitter"/>
                     <Cards link="github.com/luna-devv" cardimg="https://us-east-1.tixte.net/uploads/cdn.xyna.space/r/ksl3amusx9a.png" cardimgalt="Github" cardtext="Here you can see all my open source projects that I have programmed for you and the internet." headline="Github"/>
                    {/* if you need more cards than create then with the <Cards /> tag and put your Text inside   */}
                </div>
           <Footer />
        </div>
    )
}