PGDMP                      }           Lisycyna    17.5    17.5     #           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            $           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            %           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            &           1262    24576    Lisycyna    DATABASE     p   CREATE DATABASE "Lisycyna" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'ru-RU';
    DROP DATABASE "Lisycyna";
                     postgres    false            '           0    0    DATABASE "Lisycyna"    COMMENT     ,   COMMENT ON DATABASE "Lisycyna" IS 'Diplom';
                        postgres    false    4902            �            1259    24580    masseur    TABLE     �   CREATE TABLE public.masseur (
    "ID_masseur" integer NOT NULL,
    photo bytea,
    name text NOT NULL,
    surname text NOT NULL,
    description text
);
    DROP TABLE public.masseur;
       public         heap r       postgres    false            �            1259    24594    reservation    TABLE     �   CREATE TABLE public.reservation (
    "ID_massage" integer NOT NULL,
    name_castomer text,
    data timestamp without time zone,
    "ID_masseur" integer
);
    DROP TABLE public.reservation;
       public         heap r       postgres    false                      0    24580    masseur 
   TABLE DATA           R   COPY public.masseur ("ID_masseur", photo, name, surname, description) FROM stdin;
    public               postgres    false    217   T                  0    24594    reservation 
   TABLE DATA           V   COPY public.reservation ("ID_massage", name_castomer, data, "ID_masseur") FROM stdin;
    public               postgres    false    218   ,       �           2606    24600    reservation ID_massage 
   CONSTRAINT     `   ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT "ID_massage" PRIMARY KEY ("ID_massage");
 B   ALTER TABLE ONLY public.reservation DROP CONSTRAINT "ID_massage";
       public                 postgres    false    218            �           2606    24586    masseur id_masseur 
   CONSTRAINT     Z   ALTER TABLE ONLY public.masseur
    ADD CONSTRAINT id_masseur PRIMARY KEY ("ID_masseur");
 <   ALTER TABLE ONLY public.masseur DROP CONSTRAINT id_masseur;
       public                 postgres    false    217            �           2606    24601    reservation ID_masseur    FK CONSTRAINT     �   ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT "ID_masseur" FOREIGN KEY ("ID_masseur") REFERENCES public.masseur("ID_masseur");
 B   ALTER TABLE ONLY public.reservation DROP CONSTRAINT "ID_masseur";
       public               postgres    false    217    4746    218               �  x�m��N1���S�Th�c�w߅K`w��GHh{C=�T��V��H)ii �
��7��"l��g��&������WG��ݨ���h���fo5�I*:j�F�����/n�NZ������j[u��s}���bۗ9Mywp�^�A��F����SS|��Se�k��:G��%JO�Z�Y��n�:m�i�L�t�Of�s�OW�fئM�����!���|a�|�O�B�Sq�!�瓼L7\�r�W���]�,!�իI�P5u�Op�p�J��;MW�yu0w/�N�-�:�@�Ҧ��x7�L�ĳ��ͩ���҈�@�:	�� �1�G��߃h����F;Q5����wy�`ެ�=��|dj��D���~�᱊ɿ6�X,�2�đQ#�N�%L����X2��>���c"/�Ѣͱ�k�G[jUu�;T�S��؅ݻ�m���@��wT��˺+�û�ZZ7u!5��EK䂏��&z,��R����D��`pAN���ph�.g��[G~,,5¶ʸg�[H�>��y~�n�
*�󛴅X�gD䴞���̼#:�UyU�H�����\^�#UPX2�O�i��O��Goh����;��8���.��� /ch|�g��0ҦW��y�����۳�eB����A�)��������Z��y��O�C����M����} �%��3 D�������M�?����|>�����          �   x�U��	�@����UL�;O���b�r%�*+l@���p�#G��Y~�M�������Hht��Dy�4���ňT���=f\s���S�};�p@�=�B�?�vA�=�[AcU2�t��P �ˣ!�*�.��3?^G;     