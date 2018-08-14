import * as React from 'react'

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
    if (mergeStatus.kind === 'in-progress') {
      return <Loading />
    }

    if (mergeStatus.kind === 'clean') {
      return null
    }

    const message = `There will be ${mergeStatus.conflicts} conflicts`
    return (
      <span>
        <Octicon symbol={OcticonSymbol.alert} className="warn" />
        {message}
      </span>
    )
  }

  public render() {
    if (this.props.mergeStatus == null) {
      return null
    }

    return (
      <div className="merge-cta">
        {this.renderMessage(this.props.mergeStatus)}
      </div>
    )
  }
}
