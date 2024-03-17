import React from 'react';
import {Card, CardGrid, Panel, PanelHeader, Spacing, View} from "@vkontakte/vkui";

const Cart: React.FC = () => {

    return (
        <View activePanel="card">
            <Panel id="card">
                <PanelHeader>CardGrid</PanelHeader>
                    <CardGrid size="s" style={{justifyContent: "center", gap: '0px'}}>
                        <div style={{width: 900, display: "flex"}}>
                            <Card style={{width: 600}}>
                                <div style={{ paddingBottom: '92%' }} />
                            </Card>
                            <Card style={{width: 300}}>
                                <div style={{ paddingBottom: '92%' }} />
                            </Card>
                        </div>
                    </CardGrid>
                <Spacing size={16} />
            </Panel>
        </View>
    );
};

export default Cart;