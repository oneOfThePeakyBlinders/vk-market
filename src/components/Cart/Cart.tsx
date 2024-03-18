import React from 'react';
import {
    Avatar,
    Card,
    CardGrid,
    Div,
    Group, Headline,
    Panel,
    PanelHeader,
    Spacing,
    Text,
    Title,
    View
} from "@vkontakte/vkui";
import {CartItem} from "../../features/types.ts";
import {Icon24TrashSimpleOutline} from "@vkontakte/icons";
import {useAppDispatch} from "../../app/hooks.ts";
import {decrementItem, incrementItem, removeItem} from "../../features/cartReducer.ts";

interface IItemsProps {
    items: CartItem[]
}

const Cart: React.FC<IItemsProps> = ({items}) => {

    const dispatch = useAppDispatch();
    const handleIncrement = (id: number) => {
        dispatch(incrementItem(id));
    };

    const handleDecrement = (id: number) => {
        dispatch(decrementItem(id));
    };

    const handleRemove = (id: number) => {
        dispatch(removeItem(id));
    };

    return (
        <View activePanel="card">
            <Panel id="card">
                <PanelHeader>CardGrid</PanelHeader>
                <Group>
                    <CardGrid size="s" style={{justifyContent: "center", gap: '6px'}}>
                            <div style={{width: 900, display: "flex"}}>
                                <Card style={{width: 600, height: 420, overflowY: 'scroll'}}>
                                    {
                                        items.map((item) => (
                                            <Div style={{borderBottom: '1px solid black', display: 'flex', gap: 6}}>
                                                <Div>
                                                    <Avatar src={item.image} size={80}/>
                                                </Div>
                                                <Div>
                                                    <Title level='3'>{item.name}</Title>
                                                    <Text style={{width: 200}}>{item.desc}</Text>
                                                </Div>
                                                <Div style={{display: 'flex'}}>
                                                    <div>
                                                        <Headline
                                                            style={{width: '100px'}}>{`${item.price * item.amount}₽`}</Headline>
                                                        <div style={{
                                                            display: 'flex',
                                                            height: '20px',
                                                            gap: '4px',
                                                            marginTop: '46px'
                                                        }}>
                                                            <button onClick={() => handleIncrement(item.id)}>+</button>
                                                            <span>{item.amount}</span>
                                                            <button onClick={() => handleDecrement(item.id)}>-</button>
                                                        </div>
                                                    </div>
                                                    <Icon24TrashSimpleOutline onClick={() => handleRemove(item.id)}
                                                                              style={{cursor: 'pointer'}}/>
                                                </Div>
                                            </Div>
                                        ))
                                    }
                                </Card>
                                <Card style={{width: 300, height: 420, display: 'flex', gap: '4px'}}>
                                    <Div>
                                        <Title>Итого: </Title>
                                        <Title>{items.reduce((total, item) => total + item.price * item.amount, 0)}₽</Title>
                                    </Div>
                                </Card>
                            </div>
                        <Spacing size={16}/>
                    </CardGrid>
                </Group>
            </Panel>
        </View>
    );
};

export default Cart;