<?php

namespace Doefom\Jobboard\Builders;

use Illuminate\Support\Collection;
use Statamic\Data\DataCollection;
use Statamic\Stache\Query\Builder;

class JobQueryBuilder extends Builder
{

    protected function getFilteredKeys()
    {
        if (! empty($this->wheres)) {
            return $this->getKeysWithWheres();
        }

        return collect($this->store->paths()->keys());
    }

    protected function getKeysWithWheres()
    {
        return collect($this->wheres)->reduce(function ($ids, $where) {
            $items = app('stache')
                ->store('jobs')
                ->index($where['column'])->items();

            // Perform the filtering, and get the keys (the references, we don't care about the values).
            $keys = $this->filterWhereBasic($items, $where)->keys();

            // Continue intersecting the keys across the where clauses.
            // If a key exists in the reduced array but not in the current iteration, it should be removed.
            // On the first iteration, there's nothing to intersect, so just use the result as a starting point.
            return $ids ? $ids->intersect($keys)->values() : $keys;
        });
    }

    protected function collect($items = []): DataCollection
    {
        return new DataCollection($items);
    }

    protected function getOrderKeyValuesByIndex(): Collection
    {
        return collect($this->orderBys)->mapWithKeys(function ($orderBy) {
            $items = $this->store->index($orderBy->sort)->items()->all();

            return [$orderBy->sort => $items];
        });
    }

}
