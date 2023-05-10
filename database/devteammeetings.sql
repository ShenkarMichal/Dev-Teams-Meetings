-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2023 at 08:33 PM
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
-- Database: `devteammeetings`
--
CREATE DATABASE IF NOT EXISTS `devteammeetings` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `devteammeetings`;

-- --------------------------------------------------------

--
-- Table structure for table `devteams`
--

CREATE TABLE `devteams` (
  `devTeamID` int(11) NOT NULL,
  `devTeamName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `devteams`
--

INSERT INTO `devteams` (`devTeamID`, `devTeamName`) VALUES
(1, 'UI Team'),
(2, 'React Team'),
(3, 'Node.js Team'),
(4, 'Web Team');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `meetID` int(11) NOT NULL,
  `devTeamID` int(11) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `meetDescription` varchar(50) NOT NULL,
  `meetRoom` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetID`, `devTeamID`, `startDate`, `endDate`, `meetDescription`, `meetRoom`) VALUES
(1, 2, '2023-05-26 18:30:00', '2023-05-26 19:00:00', 'New style the forms', 'The blue room, floor 1'),
(2, 3, '2023-05-18 10:00:00', '2023-05-18 11:00:00', 'Add route of delete', 'Meetings room, floor 4'),
(3, 4, '2023-05-15 13:45:00', '2023-05-15 15:00:00', 'Getting to know new employees', 'Lobby, floor 0'),
(4, 1, '2023-05-14 14:00:00', '2023-05-14 16:00:00', 'Lecture', 'Auditorium, floor 7'),
(5, 4, '2023-05-15 10:45:00', '2023-05-15 12:00:00', 'Getting to know new employees', 'Lobby, floor 0'),
(6, 1, '2023-05-30 20:30:00', '2023-05-30 21:30:00', 'Monthly report', 'The green room, floor 3'),
(7, 4, '2023-05-15 10:45:00', '2023-05-15 12:00:00', 'Getting to know new employees', 'Lobby, floor 0'),
(8, 4, '2023-05-15 10:45:00', '2023-05-15 12:00:00', 'Getting to know new employees', 'Lobby, floor 0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `devteams`
--
ALTER TABLE `devteams`
  ADD PRIMARY KEY (`devTeamID`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetID`),
  ADD KEY `devTeamID` (`devTeamID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `devteams`
--
ALTER TABLE `devteams`
  MODIFY `devTeamID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`devTeamID`) REFERENCES `devteams` (`devTeamID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
