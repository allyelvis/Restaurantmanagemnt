<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POS System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            font-size: 24px;
            color: #0033CC;
            background-color: #6666FF;
            padding: 10px;
            margin-bottom: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
        }
        .form-group input {
            width: calc(100% - 22px);
            padding: 10px;
            margin: 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .btn {
            width: 100%;
            padding: 10px;
            background-color: #0033CC;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header"><strong>wEpesi POS System</strong></div>
        <form id="posForm">
            <div class="form-group">
                <label for="itemName">Item Name</label>
                <input type="text" id="itemName" name="itemName" required>
            </div>
            <div class="form-group">
                <label for="quantity">Quantity</label>
                <input type="number" id="quantity" name="quantity" required>
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" id="price" name="price" required>
            </div>
            <button type="submit" class="btn">Add to POS</button>
        </form>
    </div>
    <script src="posaenz.js"></script>
    <script>
        document.getElementById('posForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const itemName = document.getElementById('itemName').value;
            const quantity = document.getElementById('quantity').value;
            const price = document.getElementById('price').value;

            // Assuming posaenz.js has a function named `addItemToPOS`
            if (typeof addItemToPOS === 'function') {
                addItemToPOS(itemName, quantity, price);
            } else {
                console.error('addItemToPOS function is not defined in posaenz.js');
            }
        });
    </script>
</body>
</html>
