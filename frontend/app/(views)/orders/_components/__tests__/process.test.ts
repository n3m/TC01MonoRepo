import { Orders, StockBeer } from '@/types/Orders';
import { processOrders } from '../utils';
import { test, expect } from '@jest/globals';

const mockStock: Record<string, StockBeer> = {
  Corona: { name: "Corona", price: 115, quantity: 2 },
  Quilmes: { name: "Quilmes", price: 120, quantity: 0 },
  "Club Colombia": { name: "Club Colombia", price: 110, quantity: 3 },
};


test("[processOrders] Calculo de Subtotales", () => {
  const mockOrders: Orders[] = [
    {
      _id: "1",
      created: "-",
      paid: false,
      subtotal: 0,
      taxes: 0,
      discounts: 0,
      items: [],
      rounds: [
        {
          created: "-",
          items: [
            { name: "Corona", quantity: 2 },
            { name: "Club Colombia", quantity: 1 },
          ],
        },
      ],
    },
  ];

  const processedOrders = processOrders(mockOrders, mockStock);
  expect(processedOrders[0].rounds[0].subtotal).toBe(340); // 115 * 2 + 110 * 1
  expect(processedOrders[0].subtotal).toBe(340);
});


test("[processOrders] Calculo donde nos ponen una cerveza que no habiamos visto", () => {
  const mockOrdersWithUnknownItem: Orders[] = [
    {
      _id: "1",
      created: "-",
      paid: false,
      subtotal: 0,
      taxes: 0,
      discounts: 0,
      items: [],
      rounds: [
        {
          created: "-",
          items: [{ name: "Chela", quantity: 2 }],
        },
      ],
    },
  ];

  const processedOrders = processOrders(mockOrdersWithUnknownItem, mockStock);
  expect(processedOrders[0].rounds[0].items[0].price_per_unit).toBe(0);
  expect(processedOrders[0].rounds[0].subtotal).toBe(0);
  expect(processedOrders[0].subtotal).toBe(0);
});

test("[processOrders] Calculo de rondas sin cantidades de items", () => {
  const mockOrdersWithZeroQuantity: Orders[] = [
    {
      _id: "1",
      created: "-",
      paid: false,
      subtotal: 0,
      taxes: 0,
      discounts: 0,
      items: [],
      rounds: [
        {
          created: "-",
          items: [{ name: "Corona", quantity: 0 }],
        },
      ],
    },
  ];

  const processedOrders = processOrders(mockOrdersWithZeroQuantity, mockStock);
  expect(processedOrders[0].rounds[0].items[0].total).toBe(0);
  expect(processedOrders[0].rounds[0].subtotal).toBe(0);
  expect(processedOrders[0].subtotal).toBe(0);
});

test("[processOrders] Calculo de multiples rounds", () => {
  const mockOrdersWithMultipleRounds: Orders[] = [
    {
      _id: "1",
      created: "-",
      paid: false,
      subtotal: 0,
      taxes: 0,
      discounts: 0,
      items: [],
      rounds: [
        {
          created: "-",
          items: [{ name: "Corona", quantity: 2 }],
        },
        {
          created: "-",
          items: [{ name: "Club Colombia", quantity: 1 }],
        },
      ],
    },
  ];

  const processedOrders = processOrders(mockOrdersWithMultipleRounds, mockStock);
  expect(processedOrders[0].rounds[0].subtotal).toBe(230); // 115 * 2
  expect(processedOrders[0].rounds[1].subtotal).toBe(110); // 110 * 1
  expect(processedOrders[0].subtotal).toBe(340);
});

test("[processOrders] Calculo sin rondas", () => {
  const mockOrdersWithNoRounds: Orders[] = [
    {
      _id: "1",
      created: "-",
      paid: false,
      subtotal: 0,
      taxes: 0,
      discounts: 0,
      items: [],
      rounds: [],
    },
  ];

  const processedOrders = processOrders(mockOrdersWithNoRounds, mockStock);
  expect(processedOrders[0].rounds.length).toBe(0);
  expect(processedOrders[0].subtotal).toBe(0);
});
