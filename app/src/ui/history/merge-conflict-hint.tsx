import * as React from 'react'
import * as classNames from 'classnames'

import { Octicon, OcticonSymbol } from '../octicons'
import { Loading } from '../lib/loading'
import { MergeTreeStatus } from '../../models/merge-tree-status'

interface IMergeConflictHintProps {
  readonly mergeStatus: MergeTreeStatus | null
}

export class MergeConflictHint extends React.Component<
  IMergeConflictHintProps,
  {}
> {
  private renderMessage(mergeStatus: MergeTreeStatus): JSX.Element | null {
    const symbol =
      mergeStatus.kind === 'conflicts'
        ? OcticonSymbol.alert
        : OcticonSymbol.check

    const text =
      mergeStatus.kind === 'conflicts'
        ? `There will be ${mergeStatus.conflicts} conflicted files`
        : `No conflicted files found`

    return (
      <div>
        <Octicon symbol={symbol} />
        <span>{text}</span>
      </div>
    )
  }

  public render() {
    const { mergeStatus } = this.props
    if (mergeStatus == null) {
      return null
    }

    if (mergeStatus.kind === 'in-progress') {
      return <Loading />
    }

    // TODO: give this some proper styling love
    const className = classNames('merge-cta', {
      warn: mergeStatus.kind === 'conflicts',
      clean: mergeStatus.kind === 'clean',
    })

    return <div className={className}>{this.renderMessage(mergeStatus)}</div>
  }
}
