import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrdersPage from '../page';

jest.mock('ky', () => ({
  get: jest.fn(() => ({
    json: jest.fn().mockResolvedValue(
      {
        "stock": {
          "last_updated": "2024-09-10 12:00:00",
          "beers": [
            {
              "name": "Corona",
              "price": 115,
              "quantity": 2
            },
            {
              "name": "Quilmes",
              "price": 120,
              "quantity": 0
            },
            {
              "name": "Club Colombia",
              "price": 110,
              "quantity": 3
            }
          ]
        },
        "orders": {
          "bcdf1d77-bdf8-49de-8697-570380d40334": {
            "_id": "bcdf1d77-bdf8-49de-8697-570380d40334",
            "created": "2024-09-10 12:00:00",
            "paid": false,
            "subtotal": 0,
            "taxes": 0,
            "discounts": 0,
            "items": [],
            "rounds": [
              {
                "created": "2024-09-10 12:00:30",
                "items": [
                  {
                    "name": "Corona",
                    "quantity": 2
                  },
                  {
                    "name": "Club Colombia",
                    "quantity": 1
                  }
                ]
              },
              {
                "created": "2024-09-10 12:20:31",
                "items": [
                  {
                    "name": "Club Colombia",
                    "quantity": 1
                  },
                  {
                    "name": "Quilmes",
                    "price": 2
                  }
                ]
              },
              {
                "created": "2024-09-10 12:43:21",
                "items": [
                  {
                    "name": "Quilmes",
                    "quantity": 3
                  }
                ]
              }
            ]
          }
        }
      }
    ),
  })),
}));


describe('OrdersPage', () => {
  it('renders the content after fetching data', async () => {
    render(await OrdersPage());

    await waitFor(() => {
      expect(screen.getByTestId('orders-content')).toBeInTheDocument();
    });
  });
});