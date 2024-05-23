-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2024 at 08:36 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_handler`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `dob` date NOT NULL,
  `department` varchar(200) NOT NULL,
  `position` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `salary` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `state` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `dob`, `department`, `position`, `address`, `email`, `phone`, `image`, `salary`, `city`, `state`) VALUES
(5, 'abeesh', '2024-02-15', 'Database Administrator', 'Employee', 'wwww', 'jayaprasathjp44@gmail.com', '+919894432092', 'Hari.jpg', '087987796', 'Namakkal', 'Tamil Nadu'),
(6, 'JAYAPRASATH K', '2024-05-22', 'Software Architect', 'Manager', '2/117, Kunnamalai, Paramathi Velur(Taluk)', 'jayaprasathjp44@gmail.com', '+919894432092', 'a2.jpg', '87978', 'Namakkal', 'Tamil Nadu'),
(8, 'JAYAPRASATH K', '2024-05-29', 'Software Architect', 'Manager', '2/117, Kunnamalai, Paramathi Velur(Taluk)', 'jayaprasathjp44@gmail.com', '+919894432092', 'HRMS - Complete Guide on Managing Your Human Resource.jpeg', '987', 'Namakkal', 'Tamil Nadu'),
(101, 'Bob Smith', '1985-07-21', 'IT', 'Developer', '456 Elm Street', 'bob.smith@example.com', '234-567-8901', 'path/to/image2.jpg', '60000', 'San Francisco', 'CA'),
(102, 'Carol Taylor', '1979-12-29', 'Marketing', 'Manager', '789 Oak Street', 'carol.taylor@example.com', '345-678-9012', 'path/to/image3.jpg', '70000', 'Chicago', 'IL'),
(103, 'David Lee', '1990-04-04', 'Sales', 'Salesperson', '101 Pine Street', 'david.lee@example.com', '456-789-0123', 'path/to/image4.jpg', '55000', 'Boston', 'MA'),
(104, 'JAYAPRASATH K', '2024-05-22', 'Software Architect', 'Employee', '2/117, Kunnamalai, Paramathi Velur(Taluk)', 'jayaprasathjp44@gmail.com', '+919894432092', '927621BIT006.jpg', '54645', 'Namakkal', 'Tamil Nadu');

-- --------------------------------------------------------

--
-- Table structure for table `exemployee`
--

CREATE TABLE `exemployee` (
  `id` int(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `dob` date NOT NULL,
  `department` varchar(200) NOT NULL,
  `position` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `salary` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `state` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exemployee`
--

INSERT INTO `exemployee` (`id`, `name`, `dob`, `department`, `position`, `address`, `email`, `phone`, `image`, `salary`, `city`, `state`) VALUES
(104, 'Ella Brown', '1983-08-16', 'HR', 'Recruiter', '234 Birch Street', 'ella.brown@example.com', '567-890-1234', 'path/to/image5.jpg', '52000', 'Miami', 'FL'),
(105, 'Frank Wright', '1987-02-08', 'Operations', 'Operations Manager', '567 Cedar Street', 'frank.wright@example.com', '678-901-2345', 'path/to/image6.jpg', '62000', 'Seattle', 'WA'),
(106, 'Grace Hall', '1975-06-19', 'Legal', 'Lawyer', '890 Spruce Street', 'grace.hall@example.com', '789-012-3456', 'path/to/image7.jpg', '80000', 'Denver', 'CO'),
(107, 'Henry Foster', '1992-09-23', 'Research', 'Scientist', '321 Walnut Street', 'henry.foster@example.com', '890-123-4567', 'path/to/image8.jpg', '63000', 'Portland', 'OR'),
(108, 'Ivy Green', '1981-11-09', 'Product', 'Product Manager', '654 Aspen Street', 'ivy.green@example.com', '901-234-5678', 'path/to/image9.jpg', '67000', 'Austin', 'TX'),
(109, 'Jack Black', '1978-10-18', 'Design', 'Designer', '987 Maple Avenue', 'jack.black@example.com', '012-345-6789', 'path/to/image10.jpg', '58000', 'Las Vegas', 'NV');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`) VALUES
(1, 'admin', 'admin', 'admin@hrms.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exemployee`
--
ALTER TABLE `exemployee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`username`,`password`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
