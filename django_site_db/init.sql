BEGIN;
        INSERT INTO api_currency (currency)
        VALUES ('usd'),
                ('eur');

        INSERT INTO api_item (name, description, price, currency_id)
        VALUES ('item1', 'description1', 10, 1),
                ('item2', 'description2', 20, 2),
                ('item3', 'description3', 30, 1),
                ('item4', 'description4', 40, 2),
                ('item5', 'description5', 50, 1),
                ('item6', 'description6', 60, 2),
                ('item7', 'description7', 70, 1),
                ('item8', 'description8', 80, 2),
                ('item9', 'description9', 90, 1),
                ('item10', 'description10', 100, 2);

        INSERT INTO api_discount (name, duration, percent_off)
        VALUES ('15%', 'once', 15),
                ('20%', 'once', 20),
                ('30%', 'once', 30);

        INSERT INTO api_tax (display_name, inclusive, percentage)
        VALUES ('НДС', false, 20),
                ('НДС', false, 10),
                ('НДС', false, 15);

        INSERT INTO api_order (discount_id, tax_id)
        VALUES (1, 1),
                (2, 2),
                (3, 3);

        INSERT INTO api_order_items (order_id, item_id)
        VALUES (1, 1),
                (1, 2),
                (1, 3),
                (1, 4),
                (1, 5),
                (1, 6),
                (1, 7),
                (1, 8),
                (1, 9),
                (1, 10),
                (2, 1),
                (2, 2),
                (2, 3),
                (2, 4),
                (2, 5),
                (3, 6),
                (3, 7),
                (3, 8),
                (3, 9),
                (3, 10);
COMMIT;