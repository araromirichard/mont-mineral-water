<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        @page {
            size: A4;
            /* You can adjust the page size as needed */
            margin: 0;
        }

        @media print {
            body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                background-color: #646668;
            }
        }
    </style>
</head>

<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #051C2C; width: 100%">
    <div style="width: 100%; margin: 0 auto; padding: 8px; background-color: #7b7e80;">
        <div
            style="padding: 2.5rem; border-radius: 0.25rem; width: 80%; background-color: #ffffff; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); ">
            <div style="width: 100%; height: auto">
                <img src="{{ asset('/appLogo.png') }}" alt="Logo"
                    style="max-height: 4.5rem; max-width: auto; fill: currentColor; color: #051C2C;">
                <div style="text-align: right;">
                    <h2
                        style="font-size: 2.25rem; color: #051C2C; text-transform: uppercase; font-weight: 800; padding-top: 0.5rem; padding-bottom: 0.5rem;">
                        Invoice</h2>
                    <p style="font-size: 1rem; color: #051C2C;">Invoice No: {{ $invoiceData['invoicenumber'] }}</p>
                </div>
            </div>
            <p style="font-size: 1rem; padding-top: 1.5rem;">To:</p>
            <p style="font-weight: bold; font-size: 1rem; color: #051C2C; padding-top: 0.2rem;">{{
                $invoiceData['customer_name'] }}</p>
            <div style="width: 100%; height: auto;">
                <div style="max-width: 8rem;">
                    <p style="font-size: 0.875rem; color: #072940;">{{ $invoiceData['address'] }}</p>
                    <p style="font-size: 0.875rem; padding-top: 0.75rem; color: #072940;">{{ $invoiceData['phone'] }}
                    </p>
                </div>
                <div style="font-size: 0.875rem;">
                    <h2
                        style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 400; color: #072940; font-size: 0.875rem;">
                        Invoice Date: {{ $invoiceData['created_at'] }}</h2>
                    <p style="font-size: 0.875rem; color: #072940;">
                        19, Swaniker Street, <br>
                        Abelemkpe <br>
                        Accra
                    </p>
                </div>
            </div>
            <div style="width: 100%;">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                    <thead style="background-color: #072940; color: #FFFFFF;">
                        <tr style="height: 2.5rem; font-size: 0.875rem;">
                            <th
                                style="width: 8.33%; border: 1px solid #BCC7CE; padding: 0.75rem; text-transform: uppercase; font-weight: normal;">
                                S/N</th>
                            <th
                                style="width: 41.67%; border: 1px solid #BCC7CE; padding: 0.75rem; text-transform: uppercase; font-weight: normal;">
                                Items</th>
                            <th
                                style="width: 16.67%; border: 1px solid #BCC7CE; padding: 0.75rem; text-transform: uppercase; font-weight: normal;">
                                Qty <br><span style="font-size: 0.675rem; text-transform: capitalize;">(per pack)</span>
                            </th>
                            <th
                                style="width: 16.67%; border: 1px solid #BCC7CE; padding: 0.75rem; text-transform: uppercase; font-weight: normal;">
                                Price <br><span style="font-size: 0.675rem; text-transform: capitalize;">(GHC)</span>
                            </th>
                            <th
                                style="width: 16.67%; border: 1px solid #BCC7CE; padding: 0.75rem; text-transform: uppercase; font-weight: normal;">
                                amt <br><span style="font-size: 0.675rem; text-transform: capitalize;">(GHC)</span></th>
                        </tr>
                    </thead>
                    <tbody style="background-color: #CACCCE;">
                        @foreach ($invoiceData['items'] as $index => $item)
                        <tr
                            style="height: 2.67rem; font-size: 0.875rem; text-align: center; padding-top: 3rem; padding-bottom: 3rem;">
                            <td style="width: 8.33%; border: 1px solid #BCC7CE; text-align: center;">{{ $index + 1 }}
                            </td>
                            <td style="width: 41.67%; border: 1px solid #BCC7CE; text-align: center;">{{
                                $item['product_name'] }}</td>
                            <td style="width: 16.67%; border: 1px solid #BCC7CE; text-align: center;">{{
                                $item['quantity'] }}</td>
                            <td style="width: 16.67%; border: 1px solid #BCC7CE; text-align: center;">{{ $item['price']
                                }}</td>
                            <td style="width: 16.67%; border: 1px solid #BCC7CE; text-align: center;">{{
                                $item['quantity'] * $item['price'] }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            <div style="width: 100%; margin-top: 1rem;">
                <div
                    style="background-color: #072940; padding-left: 1.5rem; padding-right: 1.5rem; padding-top: 1rem; padding-bottom: 1rem; text-align: center; color: #f0f0f0; font-weight: 700;">
                    Total Amount:
                </div>
                <div
                    style="background-color: #072940; padding-left: 1.5rem; padding-right: 1.5rem; padding-top: 1rem; padding-bottom: 1rem; text-align: center; color: #f0f0f0; font-weight: 700;">
                    {{ $invoiceData['total'] }}</div>
            </div>
            <div style="width: 100%; height: auto; text-align: right; padding-top: 1rem;">
                <img src="{{ asset('/signature.png') }}" alt="Signature"
                    style="float: right; margin-right: 1.5rem; width: 11rem; height: auto; "><br>
                <p style="text-align: right; font-size: 0.875rem; color: #072940; padding-top: 2rem;">Manager’s
                    Signature</p>
            </div>
            <div style="text-align: center; font-size: 0.75rem; padding-top: 0.5rem;">
                <p>Goods purchased are non-refundable</p>
                <p>Thank you</p>
            </div>
        </div>
    </div>
</body>

</html>