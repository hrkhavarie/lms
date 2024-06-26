import type { Config } from 'jest'
// import nextJest from 'next/jest'
const nextJest = require('next/jest')
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// @type {import('jest').config}
// Add any custom config to be passed to Jest
const config:Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  

  preset: 'ts-jest',
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports =  createJestConfig(config)