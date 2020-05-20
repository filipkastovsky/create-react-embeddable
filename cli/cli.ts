#!/usr/bin/env node
import { command } from 'yargs';
import { builder, handleCreate } from '../create-react-embeddable';

command(
    '* [<path>] [<template>]',
    'Invalid <path> or <template>',
    builder as any,
    handleCreate
).parse();
