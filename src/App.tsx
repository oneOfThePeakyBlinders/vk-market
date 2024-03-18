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
import React, {useEffect} from "react";
import {fetchCartItems} from "./features/asyncActions.ts";
import {useAppDispatch, useAppSelector} from "./app/hooks.ts";
import Cart from "./components/Cart/Cart.tsx";

const App = () => {
  const platform = usePlatform();
  const dispatch= useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartReducer.cartItems);

  useEffect(() => {
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
                  <Cart items={cartItems}/>
                </Group>
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
  );
};

export default App;