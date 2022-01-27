import { useRouter } from 'next/router';

/* Assets: */
import btnSend from '../public/assets/img/button-send.png';

/* Componets */
import { 
    BgApp,
    BoxContent,
    Button,
    InputText
} from '../components/UI/generic-components';
import {
    Header,
    Options,
    BoxChat,
    ListMessages,
    Message
} from '../components/UI/chat';

function ChatPage(){
    const router = useRouter();

    function logout(){
        router.push('/');
    }

    return(
        <BgApp>
            <BoxContent ischatPage={true}>
                <Header>
                    <div>
                        <Options>Chat</Options>
                        <Options>Status</Options>
                    </div>

                    <Button handleAction={logout}>Logout</Button>
                </Header>

                <BoxChat>
                    <ListMessages>
                        <Message
                            username={"GabrielWolf-Dev"}
                            date="27/01/2022"
                            msg="Primeira mensagem do chat..."
                        />
                    </ListMessages>
                </BoxChat>

                <form
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '24px'
                }}>
                    <InputText
                        isChatInput={true}
                        placeholderInput="Insira a mensagem aqui..."
                        
                    />
    
                    <button
                        style={{ marginLeft: '24px' }}
                        type="submit"
                    >
                        <img src={btnSend.src} alt="Botão de enviar mensagem" />
                    </button>
                </form>
            </BoxContent>
        </BgApp>
    );
}

export default ChatPage;