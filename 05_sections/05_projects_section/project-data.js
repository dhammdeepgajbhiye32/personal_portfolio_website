/*==================================================
            IMAGE HELPER
==================================================*/

function createImages(count) {
    return [
        "cover.png",
        ...Array.from({ length: count }, (_, i) =>
            `screen_${String(i + 1).padStart(2, "0")}.png`
        )
    ];
}

/*==================================================
            PROJECT DATA
==================================================*/

const projects = [

/*==================================================
                POWER BI
==================================================*/

{
    id: "zomato",

    category: "Power BI",

    title: "Zomato Global Restaurant Analytics",

    description:
        "Interactive Power BI dashboard analyzing restaurants, cuisines, customer ratings, pricing trends and business KPIs across multiple countries.",

    technologies: [
        "Power BI",
        "SQL",
        "Excel",
        "DAX"
    ],

    overview:
        "Interactive restaurant analytics dashboard built using Power BI to analyze restaurant performance across multiple countries.",

    businessProblem:
        "Restaurant owners lacked a centralized dashboard to analyze ratings, pricing, cuisines, and customer trends.",

    dataset:
        "Zomato Global Restaurant Dataset",

    duration:
        "2 Weeks",

    role:
        "Data Analyst",

    kpis:[

        "Restaurant Count",

        "Average Rating",

        "Average Cost",

        "Online Delivery %"

    ],

    insights:[

        "India has the highest restaurant count.",

        "Restaurants offering online delivery receive higher engagement.",

        "Premium restaurants maintain higher customer ratings."

    ],

    recommendations:[

        "Expand online delivery services.",

        "Improve low-rated restaurants.",

        "Focus marketing on high-performing cuisines."

    ],
    
    github:
        "https://github.com/dhammdeepgajbhiye32/zomato_global_restaurant_analytics_dashboard_power_bi",

    folder:
        "../../03_images/05_projects/Power BI/Zomato_Global_Restaurant_Dashboard/",

    images: createImages(5)

},

{
    id: "customer_churn",

    category: "Power BI",

    title: "Customer Churn Analysis Dashboard",

    description:
        "Interactive Power BI dashboard to analyze customer churn, demographics, retention trends and business performance.",

    technologies: [
        "Power BI",
        "SQL",
        "DAX"
    ],

    overview:
    "Developed a Power BI dashboard to identify customer churn patterns, retention trends, demographics, contract types, and subscription behavior.",

    businessProblem:
    "The business needed to understand why customers were leaving and identify strategies to improve customer retention.",

    dataset:
    "Telco Customer Churn Dataset (Kaggle)",

    duration:
    "1 Week",

    role:
    "Power BI Data Analyst",

    kpis:[

        "Total Customers",

        "Churn Rate",

        "Retention Rate",

        "Monthly Revenue",

        "Customer Lifetime Value"

    ],

    insights:[

        "Month-to-month contracts have the highest churn.",

        "Senior citizens show higher churn probability.",

        "Fiber optic customers churn more frequently.",

        "Long-term contracts improve retention."

    ],

    recommendations:[

        "Promote annual contracts.",

        "Offer loyalty rewards.",

        "Improve customer support for high-risk customers.",

        "Create personalized retention campaigns."

    ],

    github:
        "https://github.com/dhammdeepgajbhiye32/customer_churn_analytics_dashboard-power_bi",

    folder:
        "../../03_images/05_projects/Power BI/Customer_Churn_Analysis_Dashboard/",

    images: createImages(3)

},

{
    id: "personal_finance",

    category: "Power BI",

    title: "Personal Financial Dashboard",

    description:
        "Personal finance dashboard for income, expenses, savings, budgeting and financial goal tracking.",

    technologies: [
        "Power BI",
        "Excel",
        "DAX"
    ],

    overview:
    "Created a personal finance dashboard to monitor income, expenses, savings, investments, budgeting, and monthly financial performance.",

    businessProblem:
    "Managing multiple income and expense categories manually made financial planning inefficient.",

    dataset:
    "Personal Financial Records",

    duration:
    "5 Days",

    role:
    "Power BI Developer",

    kpis:[

        "Monthly Income",

        "Monthly Expenses",

        "Savings",

        "Investment",

        "Budget Utilization"

    ],

    insights:[

        "Shopping contributes significantly to monthly expenses.",

        "Savings increase during lower spending months.",

        "Food expenses remain the highest recurring category.",

        "Budget tracking improves financial discipline."

    ],

    recommendations:[

        "Reduce unnecessary shopping expenses.",

        "Increase monthly investments.",

        "Automate expense tracking.",

        "Maintain emergency savings."

    ],

    github:
        "https://github.com/dhammdeepgajbhiye32/personal_financial_dashboard_Power_BI",

    folder:
        "../../03_images/05_projects/Power BI/Personal_Financial_Dashboard/",

    images: createImages(0)

},

/*==================================================
                    EXCEL
==================================================*/

{
    id: "credit_card_fraud",

    category: "Excel",

    title: "Credit Card Fraud Analysis Dashboard",

    description:
        "Interactive Excel dashboard to analyze fraudulent transactions and monitor fraud trends.",

    technologies: [
        "Excel",
        "Power Query",
        "Pivot Table"
    ],

    overview:
    "Built an interactive Excel dashboard to analyze fraudulent transactions, transaction patterns, fraud distribution, and financial risks.",

    businessProblem:
    "Banks needed better visibility into suspicious transactions to reduce fraud losses.",

    dataset:
    "Credit Card Fraud Detection Dataset (Kaggle)",

    duration:
    "1 Week",

    role:
    "Data Analyst",

    kpis:[

        "Total Transactions",

        "Fraud Transactions",

        "Fraud Percentage",

        "Transaction Amount",

        "Risk Score"

    ],

    insights:[

        "Fraud transactions represent a small percentage but high financial loss.",

        "Large-value transactions show higher fraud probability.",

        "Specific transaction categories have higher fraud rates.",

        "Peak fraud occurs during certain time periods."

    ],

    recommendations:[

        "Implement real-time fraud alerts.",

        "Increase verification for high-value transactions.",

        "Use anomaly detection models.",

        "Continuously monitor suspicious activity."

    ],

    github:
        "https://github.com/dhammdeepgajbhiye32/credit-card-transaction-fraud-analysis-dashboard-excel",

    folder:
        "../../03_images/05_projects/Excel/Credit_Card_Fraud_Analysis_Dashboard/",

    images: createImages(2)

},

{
    id: "ecommerce_sales",

    category: "Excel",

    title: "E-Commerce Sales Analysis Dashboard",

    description:
        "Sales dashboard to analyze revenue, profit, customers, regions and product categories.",

    technologies: [
        "Excel",
        "Power Query",
        "Pivot Table"
    ],

    overview:
    "Developed a dynamic Excel dashboard to analyze sales performance, profit trends, customer segments, products, and regional performance.",

    businessProblem:
    "The company required a centralized sales reporting solution for better business decisions.",

    dataset:
    "Sample Superstore Dataset (Kaggle)",

    duration:
    "1 Week",

    role:
    "Business Data Analyst",

    kpis:[

        "Sales",

        "Profit",

        "Orders",

        "Customers",

        "Profit Margin"

    ],

    insights:[

        "Technology generates the highest profit.",

        "Furniture has lower profit margins.",

        "West region contributes maximum revenue.",

        "Consumer segment generates most sales."

    ],

    recommendations:[

        "Focus on high-margin products.",

        "Improve furniture profitability.",

        "Expand successful regional strategies.",

        "Increase marketing for profitable categories."

    ],

    github:
        "https://github.com/dhammdeepgajbhiye32/e-commerce-sales-analysis-dashboard-excel",

    folder:
        "../../03_images/05_projects/Excel/Ecommerce_Sales_Analysis_Dashboard/",

    images: createImages(2)

},

{
    id: "zomato_excel",

    category: "Excel",

    title: "Zomato Restaurant Analysis Dashboard",

    description:
        "Excel dashboard exploring restaurant ratings, cuisines, pricing and customer insights.",

    technologies: [
        "Excel",
        "Power Query",
        "Pivot Table",
        "Charts"
    ],

    overview:
    "Created an Excel dashboard to analyze restaurant ratings, pricing, cuisines, customer reviews, and business performance.",

    businessProblem:
    "Restaurant businesses lacked visual insights into customer preferences and operational performance.",

    dataset:
    "Zomato Restaurant Dataset",

    duration:
    "1 Week",

    role:
    "Data Analyst",

    kpis:[

        "Restaurant Count",

        "Average Rating",

        "Average Price",

        "Cuisine Distribution",

        "Online Delivery"

    ],

    insights:[

        "Highly rated restaurants receive more customer engagement.",

        "Certain cuisines dominate customer demand.",

        "Affordable pricing attracts more customers.",

        "Online delivery increases restaurant popularity."

    ],

    recommendations:[

        "Promote top-rated restaurants.",

        "Expand popular cuisines.",

        "Improve online ordering.",

        "Optimize pricing strategies."

    ],

    github:
        "https://github.com/dhammdeepgajbhiye32/zomato_restaurant_analysis_dashboard_project-Excel",

    folder:
        "../../03_images/05_projects/Excel/Zomato_Global_Restaurant_Analysis_Dashboard/",

    images: createImages(2)

},

/*==================================================
                    PYTHON
==================================================*/

{
    id: "sales_performance_analysis",

    category: "Python",

    title: "Sales Performance Analysis",

    description:
        "Python data visualization project built using Matplotlib for sales performance analysis.",

    technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib"
    ],

    overview:
    "Performed exploratory data analysis and created professional business visualizations using Python and Matplotlib.",

    businessProblem:
    "Business managers required visual reports to monitor sales trends and product performance.",

    dataset:
    "Sales Dataset",

    duration:
    "5 Days",

    role:
    "Python Data Analyst",

    kpis:[

        "Sales",

        "Profit",

        "Orders",

        "Growth Rate"

    ],

    insights:[

        "Sales increase during festive seasons.",

        "Technology products generate higher revenue.",

        "Regional sales vary significantly.",

        "Customer demand changes seasonally."

    ],

    recommendations:[

        "Increase inventory before peak seasons.",

        "Focus marketing on high-performing regions.",

        "Improve low-performing product categories.",

        "Forecast demand using historical trends."

    ],

    github:
        "https://github.com/dhammdeepgajbhiye32/data-visualization-matplotlib",

    folder:
        "../../03_images/05_projects/Python/Matplotlib_Python/",

    images: createImages(8)

},

{
    id: "hospital_analytics",

    category: "Python",

    title: "Hospital Resource Analytics",

    description:
        "Exploratory healthcare analytics using Pandas, NumPy, Matplotlib and Seaborn.",

    technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
    ],

    overview:
    "Performed healthcare data analysis using Python, Pandas, and Seaborn to understand patient demographics, hospital utilization, and treatment trends.",

    businessProblem:
    "Hospitals required better resource planning and patient management through data-driven insights.",

    dataset:
    "Hospital Resource Utilization Dataset",

    duration:
    "2 Weeks",

    role:
    "Python Data Analyst",

    kpis:[

        "Patient Count",

        "Average Stay Duration",

        "Hospital Utilization",

        "Treatment Cost",

        "Department Performance"

    ],

    insights:[

        "Emergency departments have the highest patient load.",

        "Older patients require longer hospital stays.",

        "Hospital occupancy varies by season.",

        "Resource utilization differs across departments."

    ],

    recommendations:[

        "Optimize staff allocation.",

        "Improve bed management.",

        "Reduce patient waiting time.",

        "Use predictive analytics for resource planning."

    ],

    github:
        "https://github.com/dhammdeepgajbhiye32/advanced-data-visualization-python-seaborn",

    folder:
        "../../03_images/05_projects/Python/Seaborn_Python/",

    images: createImages(18)

},

/*==================================================
                    SQL
==================================================*/

{
    id: "retail_orders",

    category: "SQL",

    title: "Retail Orders Analysis",

    description:
        "Complete SQL + Python analytics project covering data cleaning, SQL analysis and dashboard reporting.",

    technologies: [
        "Python",
        "SQL",
        "MySQL",
        "Pandas",
        "Matplotlib"
    ],

    overview:
    "Built an end-to-end data analytics project using Python and SQL to clean, transform, analyze, and visualize retail sales data.",

    businessProblem:
    "The business lacked automated reporting for sales performance, product demand, and regional revenue analysis.",

    dataset:
    "Retail Orders Dataset (Kaggle)",

    duration:
    "2 Weeks",

    role:
    "Data Analyst",

    kpis:[

        "Total Sales",

        "Orders",

        "Profit",

        "Top Products",

        "Regional Revenue"

    ],

    insights:[

        "Technology products generate the highest revenue.",

        "Western region contributes maximum sales.",

        "Seasonal demand significantly affects revenue.",

        "Top 20% of products generate most profit."

    ],

    recommendations:[

        "Increase inventory for high-demand products.",

        "Improve sales in underperforming regions.",

        "Automate reporting using SQL.",

        "Use forecasting for inventory planning."

    ],

    github: "https://github.com/dhammdeepgajbhiye32/retails_orders_dashboard_python_-_sql",

    folder:
        "../../03_images/05_projects/SQL/Retails_Orders_Dashboard/",

    images: createImages(7)

}

];