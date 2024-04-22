-- CreateTable
CREATE TABLE "Admin" (
    "Admin_ID" SERIAL NOT NULL,
    "User" VARCHAR(255) NOT NULL,
    "User_Contact" DECIMAL(255,0) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("Admin_ID")
);

-- CreateTable
CREATE TABLE "Customer" (
    "Customer_ID" SERIAL NOT NULL,
    "Customer_name" VARCHAR(255) NOT NULL,
    "Customer_address" VARCHAR(255) NOT NULL,
    "Customer_contact" VARCHAR(255) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("Customer_ID")
);

-- CreateTable
CREATE TABLE "Product" (
    "Product_ID" SERIAL NOT NULL,
    "Product_type" VARCHAR(255) NOT NULL,
    "Product_size" VARCHAR(255) NOT NULL,
    "Product_amount" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("Product_ID")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "Supplier_ID" SERIAL NOT NULL,
    "Supplier_name" VARCHAR(255) NOT NULL,
    "Supplier_origin" VARCHAR(255) NOT NULL,
    "Supplier_contact" INTEGER NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("Supplier_ID")
);

-- CreateTable
CREATE TABLE "Workers" (
    "Workers_ID" SERIAL NOT NULL,
    "Workers_name" VARCHAR(255) NOT NULL,
    "Workers_address" VARCHAR(255) NOT NULL,
    "Workers_age" INTEGER NOT NULL,
    "Workers_contact" INTEGER NOT NULL,

    CONSTRAINT "Workers_pkey" PRIMARY KEY ("Workers_ID")
);
