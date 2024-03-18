import {Icon32LogoVkColor} from '@vkontakte/icons';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  usePlatform, Title,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import React from "react";
import {fetchCartItems} from "./features/asyncActions.ts";
import {useAppDispatch, useAppSelector} from "./app/hooks.ts";
import Cart from "./components/Cart/Cart.tsx";

const App = () => {
  const platform = usePlatform();
  const dispatch= useAppDispatch();
  const {cartItems, status} = useAppSelector((state) => state.cartReducer);

  React.useEffect(() => {
    dispatch(fetchCartItems());
  }, []); // при монтировании;


  return (
      <AppRoot>
        <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none"/>}>
          <SplitCol autoSpaced>
            <View activePanel="main">
              <Panel id="main">
                <PanelHeader before={<Icon32LogoVkColor/>}>VK-MARKET</PanelHeader>
                <Group header={<Header mode="secondary"><Title>CART</Title></Header>}>
                  {status === 'loading' ? (
                      <Title level='1' weight='3' style={{margin: 'auto'}}>Loading...</Title>
                  ) : status === 'error' ? (
                      <Title level='1' weight='3' style={{margin: 'auto'}}>Error loading items ):</Title>
                  ) : (
                      <Cart items={cartItems}/>
                  )
                  }
                </Group>
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
  );
};

export default App;