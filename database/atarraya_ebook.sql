-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 29-04-2015 a las 11:19:14
-- Versión del servidor: 5.5.42-cll
-- Versión de PHP: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `atarraya_ebook`
--
CREATE DATABASE IF NOT EXISTS `atarraya_ebook` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `atarraya_ebook`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
  `id` varchar(10) NOT NULL,
  `data` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`id`, `data`) VALUES
('1', '{\n    "titulos":"titulo1,titulo2,titulo3,titulo4,titlo5",\n    "textos": {\n        "titulo1":"t1,t2,t3",\n        "titulo2":"t1,t2,t3",\n        "titulo3":"t1,t2,t3",\n        "titulo4":"t1,t2,t3,t4,t5,t6",\n        "titulo5":"t1"\n    }\n}'),
('2', '{\n    "titulos":"titulo1,titulo2",\n    "textos": {\n        "titulo5":"t1"\n        "titulo4":"t1,t2,t3,t4,t5,t6",\n        "titulo3":"t1"\n    }\n}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secuencias`
--

CREATE TABLE IF NOT EXISTS `secuencias` (
  `id` varchar(10) NOT NULL,
  `paginas` varchar(20) DEFAULT NULL,
  `menu_izquierda` varchar(500) DEFAULT NULL,
  `menu_derecha` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `secuencias`
--

INSERT INTO `secuencias` (`id`, `paginas`, `menu_izquierda`, `menu_derecha`) VALUES
('1', '1', 'selva,huida,pasado', 'comentarios,videos,audios,imagenes,materiales'),
('10', '1,2,3,4,5,6', 'sabiduria,huida', 'comentarios,videos,audios,imagenes,materiales'),
('11', '1', 'sabiduria', 'comentarios,videos,audios,imagenes,materiales'),
('12', '1,2,3,4,5,6,7', 'sabiduria,huida,pasado', 'comentarios,videos,audios,imagenes,materiales'),
('13', '1', 'huida', 'comentarios,videos,audios,imagenes,materiales'),
('14', '1,2,3', 'sabiduria,huida,pasado', 'comentarios,videos,audios,imagenes,materiales'),
('15', '1,2,3', 'huida,pasado', 'comentarios,videos,audios,imagenes,materiales'),
('16', '1,2,3,4,5,6,7,8,9,10', 'sabiduria,huida,pasado,riqueza', 'comentarios,videos,audios,imagenes,materiales'),
('17', '1', 'sabiduria,huida', 'comentarios,videos,audios,imagenes,materiales'),
('18', '1,2,3,4,5', 'sabiduria,huida,pasado,riqueza,selva', 'comentarios,videos,audios,imagenes,materiales'),
('19', '1', 'sabiduria,selva', 'comentarios,videos,audios,imagenes,materiales'),
('2', '1,2', 'sabiduria,riqueza', 'comentarios,videos,audios,imagenes,materiales'),
('20', '1,2,3', 'selva', 'comentarios,videos,audios,imagenes,materiales'),
('21', '1,2,3,4', 'sabiduria,riqueza', 'comentarios,videos,audios,imagenes,materiales'),
('22', '1,2,3', 'sabiduria,pasado,huida', 'comentarios,videos,audios,imagenes,materiales'),
('23', '1,2,3', 'sabiduria,pasado,riqueza', 'comentarios,videos,audios,imagenes,materiales'),
('24', '1,2', 'sabiduria,pasado,riqueza', 'comentarios,videos,audios,imagenes,materiales'),
('25', '1,2', 'pasado,selva', 'comentarios,videos,audios,imagenes,materiales'),
('26', '1,2', 'pasado', 'comentarios,videos,audios,imagenes,materiales'),
('3', '1', 'sabiduria,riqueza', 'comentarios,videos,audios,imagenes,materiales'),
('4', '1', 'pasado', 'comentarios,videos,audios,imagenes,materiales'),
('5', '1', 'pasado', 'comentarios,videos,audios,imagenes,materiales'),
('6', '1,2,3,4,5,6', 'selva,huida,pasado,sabiduria', 'comentarios,videos,audios,imagenes,materiales'),
('7', '1', 'selva,huida', 'comentarios,videos,audios,imagenes,materiales'),
('8', '1,2', 'sabiduria', 'comentarios,videos,audios,imagenes,materiales'),
('9', '1,2,3,4', 'sabiduria,pasado,huida', 'comentarios,videos,audios,imagenes,materiales');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
