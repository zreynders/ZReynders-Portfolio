# Price Optimisation Engine
## Overview
Beyond basic dynamic pricing - multi-objective optimisation

What to build:
 - Price elasticity modeling (how demand changes with price)
    https://publications.pricingsociety.com/understanding-price-elasticity-models-a-comprehensive-cutting-edge-guide/ 
 - Competitive pricing analysis (scrape/simulate competitor prices)
 - Inventory-aware pricing (perishable goods, time-decay)
 - Multi-armed bandit for price testing
    https://medium.com/data-science/dynamic-pricing-with-multi-armed-bandit-learning-by-doing-3e4550ed02ac 
 - Show: "Increased revenue by X% vs fixed pricing strategy"

Why it matters: Works for e-commerce, SaaS, food-tech, travel

Tech stack: Python, scikit-learn, optimisation libraries (scipy.optimize, PuLP)

## Datasets
### 1 - Elasticity
I was able to obtain a dataset from kaggle that will work to show how this Price Optimisation Engine will work.

The data set includes the following columns:
1. Store_Number
2. SKU_Coded
3. Product_Class_Code
4. Sold_Date
5. Qty_Sold
6. Total_Sale_Value
7. On_Promo

This dataset will work for price elasticity. We can also use it for inventory aware pricing.

Source: https://www.kaggle.com/code/pradeep13/learn-price-elasticity-ds-ml-course-part-1/notebook

### 2 - Dynamic Pricing - Car Share
Another dataset from kaggle that represents pricing based on demand, and it doesn't have competitor data.

The data set includes the following columns:
1. Number_of_Riders
2. Number_of_Drivers
3. Location_Category
4. Customer_Loyalty_Status
5. Number_of_Past_Rides
6. Average_Ratings
7. Time_of_Booking
8. Vehicle_Type
9. Expected_Ride_Duration
10. Historical_Cost_of_Ride

Source: https://www.kaggle.com/datasets/arashnic/dynamic-pricing-dataset

### 3 - Inventory Optimisation Data - (This is the one)
Another source from kaggle, this includes 3 datasets:

demand_forecasting.csv:
1. Product ID
2. Date
3. Store ID
4. Sales Quantity
5. Price
6. Promotions
7. Seasonality Factors
8. External Factors
9. Demand Trend
10. Customer Segments

inventory_monitoring.csv:
1. Product ID
2. Store ID
3. Stock Levels
4. Supplier Lead Time (days)
5. Stockout Frequency
6. Reorder Point
7. Expiry Date
8. Warehouse Capacity
9. Order Fulfillment Time (days)

pricing_optimizaiton.csv:
1. Product ID
2. Store ID
3. Price
4. Competitor Prices
5. Discounts
6. Sales Volume
7. Customer Reviews
8. Return Rate (%)
9. Storage Cost
10. Elasticity Index

This dataset seems to include everything I need to do my full Price Optimisation Engine.

Source: https://www.kaggle.com/datasets/suvroo/inventory-optimization-for-retail 

## Price Elasticity
Price elasticity answers the question: "How does demand respond to price changes?"

This is the first question we want to answer on our path to a full dynamic pricing model.
