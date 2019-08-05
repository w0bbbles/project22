--
-- PostgreSQL database dump
--

-- Dumped from database version 11.4
-- Dumped by pg_dump version 11.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: KWAN
--

INSERT INTO public.events (id, name, start_date, location, url, description) VALUES (3, 'Rainforest Lumina Season 2', '2019-06-01', 'Singapore Zoo', ' www.rainforestlumina.sg', 'Presented by Singapore Zoo, this lush and luminous world invites you to embark on a night walk into a magical rainforest.');
INSERT INTO public.events (id, name, start_date, location, url, description) VALUES (4, 'Cirque Du Soleil – Kurios', '2019-07-05', 'Under the Big Top, Bayfront Avenue', 'www.sistic.com.sg/events/kurios0819', 'Cirque du Soleil comes to Singapore with their newest creation under the Big Top, KURIOS – Cabinet of Curiosities.');
INSERT INTO public.events (id, name, start_date, location, url, description) VALUES (5, 'Aladdin', '2019-07-21', 'Sands Theatre at Marina Bay Sands®', 'https://baseentertainment.com.sg/shows/aladdin/', 'Lavish costumes and special effects will blow you away at this live musical adaptation of Disney’s Aladdin.');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: KWAN
--

INSERT INTO public.users (id, name, password) VALUES (1, 'kittyninja', 'meow');
INSERT INTO public.users (id, name, password) VALUES (2, 'keith', 'meow');
INSERT INTO public.users (id, name, password) VALUES (3, 'kitty', 'bomb');
INSERT INTO public.users (id, name, password) VALUES (4, 'keith', 'kwan');
INSERT INTO public.users (id, name, password) VALUES (5, 'ggh', 'ggh');


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: KWAN
--

SELECT pg_catalog.setval('public.events_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: KWAN
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- PostgreSQL database dump complete
--

