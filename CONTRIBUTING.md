# Contributing to Storybook Addon Amplitude

Thanks for your interest in contributing to our Storybook addon. If you find this guide is missing something, feel free to send us a PR with improvements.

For more information about what this addon does and how to use it, check out our [README](./README.md).

## Development Setup

1. Fork and clone the repository:

   ```bash
   git clone https://github.com/your-username/storybook-addon-amplitude.git
   cd storybook-addon-amplitude
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Build the project:

   ```bash
   yarn build
   ```

4. For development with watch mode:
   ```bash
   yarn build:watch
   ```

## Development Workflow

1. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and ensure the code builds:

   ```bash
   yarn build
   ```

3. Run linting:

   ```bash
   yarn lint
   ```

4. Commit your changes following conventional commits format:
   ```bash
   git commit -m "feat: add new feature"
   ```

### Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## Testing

Before submitting a pull request, please ensure:

1. Your code builds successfully
2. All linting checks pass
3. You've tested the changes in a Storybook project
4. You've added or updated tests if applicable (testing Coming Soon)

## Release Process

This project uses [Auto](https://intuit.github.io/auto/) for automated releases. The release process is handled automatically through GitHub Actions.

### Pull Request Process

1. Create a pull request against the main branch
2. Auto will automatically create a canary release for your PR
3. Once approved and merged, Auto will:
   - Generate a changelog
   - Create a new release
   - Publish to NPM

### Version Control

You can control the version bump by adding one of these labels to your PR:

- `patch` - For bug fixes and minor changes (0.0.x)
- `minor` - For new features that don't break existing functionality (0.x.0)
- `major` - For breaking changes (x.0.0)

If no label is added, Auto will determine the version bump based on your commit messages.

## Code Style

- We use Prettier for code formatting
- Run `yarn lint:fix` to automatically fix formatting issues
- TypeScript is required for all new code
- Follow the existing code style and patterns

## Questions and Support

If you have any questions or need help:

1. Check the [Storybook Addon documentation](https://storybook.js.org/docs/addons/writing-addons)
2. Open an issue in the repository
3. Reach out to the maintainers

## License

By contributing to this project, you agree that your contributions will be licensed under the project's MIT License.
