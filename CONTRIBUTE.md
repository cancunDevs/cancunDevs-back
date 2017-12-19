## Preparing the Project for Release 

cancunDevs uses [semantic versioning](http://semver.org/) for its releases.

To prepare the project for release:

1. Create a release branch off `develop` named `feat/add-version`.
    ```bash
    git checkout -b feat/add-version
    ```
1. Update the version.
    ```bash
    npm version [major|minor|patch] -m "Update version to %s"
    ```  
    where `%s` is replaced by the version number.
    Follow [this guidelines](http://semver.org/) to choose the increment in the version number.

1. Create a PR from the release branch into `develop`. 
    1. Use `Merge release branch into develop - Release vX.Y.Z` as the PR title.
    1. This PR should have the next format:
        ```Markdown
        #### What does this PR do?
        Merges `develop` into `master`. The code in `develop` is already reviewed.
        Includes into production the new features already in staging.
        - Any additional info...

        #### Features in this Release
        [#(PR1 Number)](PR1 Link) PR Title 1
        [#(PR2 Number)](PR2 Link) PR Title 2
        [#(PR3 Number)](PR3 Link) PR Title 3
        ...
        ```
1. Create another PR from the release branch into `master`. 
    1. Use `Merge release branch into master - Release vX.Y.Z` as the PR title.
    1. This PR should have the next format:
        ```Markdown
        #### What does this PR do?
        Merges the release branch pulled from `develop` into `master`. The code in `develop` is already reviewed.
        Includes into production the new features already in staging.
        - Any additional info...

        #### Features in this Release
        [#(PR1 Number)](PR1 Link) PR Title 1
        [#(PR2 Number)](PR2 Link) PR Title 2
        [#(PR3 Number)](PR3 Link) PR Title 3
        ...
        ```
1. After you've merged the PR to master, [create a release](#creating-a-release). 
1. Verify that the same steps are followed in the frontend.

## Creating a Release

To create a release:

1. Go to the [releases section](https://github.com/cancunDevs/cancunDevs-back/releases) of the cancunDevs-back repository.
1. Click **Draft a new release**. 
1. Fill out the release form with the following information. 

    | Field | Value |
    |-----|-----|
    | **Tag version** | `X.Y.Z` |
    | **Target** | master |
    | **Release title** | `v.X.Y.Z YYYY-MM-DD` |

    **Description** 
    ```Markdown
    #### Features in this release:
    [#(PR1 Number)](PR1 Link) PR Title 1
    [#(PR2 Number)](PR2 Link) PR Title 2
    [#(PR3 Number)](PR3 Link) PR Title 3 
    ```
1. Click **Publish release**.  
    Your new release is visible in the [releases section](https://github.com/cancunDevs/cancunDevs-back/releases).