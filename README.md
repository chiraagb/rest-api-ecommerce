# How to Run the project
  1. clone the repo
  2. edit the .env file and add your MONGO url
  3. in the cli, type npm run dev to start the localhost on port 3000 and the MongoDB connection is success.
     Here is the Image ![image](https://github.com/chiraagb/rest-api-ecommerce/assets/113826990/9c08c9a1-4aae-4b1a-a3bf-8dba85bba8c8)

# How to Interact with the API
  1. Here's how the Postman Collection will look like. ![image](https://github.com/chiraagb/rest-api-ecommerce/assets/113826990/4adb1803-728f-48cf-a676-755a045f703e)
  2. When creating a product, a sample input will look like this
     
     ```json
               {
                  "name": "IPHONE X",
                  "description": "High Quality Full Featured smartphone with advanced features",
                  "price": 799.99,
                  "variants": [
                      {
                        "name": "Black",
                        "sku": "SPH-X-BLK-001",
                        "additionalCost": 0,
                        "stockCount": 100
                      },
                      {
                        "name": "Silver",
                        "sku": "SPH-X-SLV-001",
                        "additionalCost": 10,
                        "stockCount": 50
                      },
                      {
                        "name": "Blue",
                        "sku": "SPH-X-BLU-001",
                        "additionalCost": 15,
                        "stockCount": 30
                      }
                    ]
                }



     
# Sample Routes 
   1. To create a product POST route - ``` localhost:3000/api/routes/create-products ``` and the input above, run in the postman
   2. Similarly various routes can be found out in routes folder

# Architectural Decision / Assumptions
  0. All the operations are managed by a unique ID provided by the mongoDB database including the variants of that product
  1. Creating a product (POST) all the fields are necessary
  2. Updating a product any field of Product can be updated and it is not necessary to update every field
  3. Same goes to create a variant (all the fields are necessary)
  4. It is not necessary to update every field of the variant.

# Test Driven Development (Chai,Mocha,ChaiHttp)
